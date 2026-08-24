"""
MVC Architecture Demo - Model Layer
The Model represents the data and business logic of the application.
It manages the data, logic, and rules of the application.
"""


class User:
    """User model representing a user entity"""

    def __init__(self, user_id: int, name: str, email: str, role: str = "user"):
        self.id = user_id
        self.name = name
        self.email = email
        self.role = role
        self.created_at = None

    def __repr__(self):
        return f"User(id={self.id}, name='{self.name}', email='{self.email}', role='{self.role}')"

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "role": self.role
        }

    @classmethod
    def from_dict(cls, data: dict):
        return cls(data["id"], data["name"], data["email"], data.get("role", "user"))


class UserModel:
    """Model for managing user data - handles data storage and retrieval"""

    def __init__(self):
        # In-memory storage (in real app, this would be a database)
        self._users = {}
        self._next_id = 1
        # Seed with some sample data
        self._seed_data()

    def _seed_data(self):
        """Initialize with sample users"""
        sample_users = [
            {"name": "Alice Johnson", "email": "alice@example.com", "role": "admin"},
            {"name": "Bob Smith", "email": "bob@example.com", "role": "user"},
            {"name": "Carol Williams", "email": "carol@example.com", "role": "user"},
            {"name": "David Brown", "email": "david@example.com", "role": "moderator"},
        ]
        for user_data in sample_users:
            self.create_user(user_data["name"], user_data["email"], user_data["role"])

    def create_user(self, name: str, email: str, role: str = "user") -> User:
        """Create a new user"""
        # Business logic: validate email uniqueness
        if self.get_user_by_email(email):
            raise ValueError(f"User with email '{email}' already exists")

        user = User(self._next_id, name, email, role)
        self._users[self._next_id] = user
        self._next_id += 1
        return user

    def get_user(self, user_id: int) -> User:
        """Get a user by ID"""
        return self._users.get(user_id)

    def get_user_by_email(self, email: str) -> User:
        """Get a user by email"""
        for user in self._users.values():
            if user.email == email:
                return user
        return None

    def get_all_users(self) -> list:
        """Get all users"""
        return list(self._users.values())

    def update_user(self, user_id: int, name: str = None, email: str = None, role: str = None) -> User:
        """Update user information"""
        user = self.get_user(user_id)
        if not user:
            raise ValueError(f"User with ID {user_id} not found")

        # Business logic: validate email uniqueness if changing
        if email and email != user.email:
            if self.get_user_by_email(email):
                raise ValueError(f"User with email '{email}' already exists")
            user.email = email

        if name:
            user.name = name
        if role:
            user.role = role

        return user

    def delete_user(self, user_id: int) -> bool:
        """Delete a user"""
        if user_id in self._users:
            del self._users[user_id]
            return True
        return False

    def get_users_by_role(self, role: str) -> list:
        """Get all users with a specific role"""
        return [user for user in self._users.values() if user.role == role]

    def get_user_count(self) -> int:
        """Get total user count"""
        return len(self._users)

    def get_role_stats(self) -> dict:
        """Get statistics by role"""
        stats = {}
        for user in self._users.values():
            stats[user.role] = stats.get(user.role, 0) + 1
        return stats


# Example usage
if __name__ == "__main__":
    model = UserModel()

    print("=== Model Demo ===")
    print(f"Total users: {model.get_user_count()}")
    print(f"Role stats: {model.get_role_stats()}")
    print("\nAll users:")
    for user in model.get_all_users():
        print(f"  {user}")

    print("\nCreating new user...")
    new_user = model.create_user("Eve Davis", "eve@example.com", "user")
    print(f"Created: {new_user}")

    print("\nUpdating user...")
    updated = model.update_user(1, role="super_admin")
    print(f"Updated: {updated}")

    print("\nFinal user list:")
    for user in model.get_all_users():
        print(f"  {user}")