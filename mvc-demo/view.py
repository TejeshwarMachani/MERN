"""
MVC Architecture Demo - View Layer
The View represents the UI components - how data is presented to the user.
It handles the display logic and user interface rendering.
"""


class UserView:
    """View for displaying user information"""

    @staticmethod
    def show_header(title: str):
        """Display a formatted header"""
        print("\n" + "=" * 60)
        print(f"  {title}")
        print("=" * 60)

    @staticmethod
    def show_user_list(users: list):
        """Display a list of users in a formatted table"""
        if not users:
            print("  No users found.")
            return

        print(f"  {'ID':<5} {'Name':<20} {'Email':<30} {'Role':<15}")
        print("  " + "-" * 70)
        for user in users:
            print(f"  {user.id:<5} {user.name:<20} {user.email:<30} {user.role:<15}")

    @staticmethod
    def show_user_detail(user):
        """Display detailed user information"""
        if not user:
            print("  User not found.")
            return

        print(f"  ┌{'─' * 50}┐")
        print(f"  │ {'USER DETAILS':^48} │")
        print(f"  ├{'─' * 50}┤")
        print(f"  │ {'ID:':<12} {user.id:<36} │")
        print(f"  │ {'Name:':<12} {user.name:<36} │")
        print(f"  │ {'Email:':<12} {user.email:<36} │")
        print(f"  │ {'Role:':<12} {user.role:<36} │")
        print(f"  └{'─' * 50}┘")

    @staticmethod
    def show_stats(stats: dict):
        """Display statistics"""
        print("\n  📊 Statistics:")
        for key, value in stats.items():
            print(f"     {key.capitalize()}: {value}")

    @staticmethod
    def show_message(message: str, msg_type: str = "info"):
        """Display a message with type indicator"""
        icons = {"info": "ℹ️", "success": "✅", "error": "❌", "warning": "⚠️"}
        icon = icons.get(msg_type, "ℹ️")
        print(f"  {icon} {message}")

    @staticmethod
    def show_menu():
        """Display the main menu"""
        print("\n" + "─" * 40)
        print("  USER MANAGEMENT SYSTEM (MVC Demo)")
        print("─" * 40)
        print("  1. List all users")
        print("  2. View user details")
        print("  3. Create new user")
        print("  4. Update user")
        print("  5. Delete user")
        print("  6. View statistics")
        print("  0. Exit")
        print("─" * 40)

    @staticmethod
    def get_user_input(prompt: str) -> str:
        """Get input from user"""
        return input(f"  {prompt}: ").strip()

    @staticmethod
    def get_user_data() -> dict:
        """Get new user data from input"""
        return {
            "name": UserView.get_user_input("Enter name"),
            "email": UserView.get_user_input("Enter email"),
            "role": UserView.get_user_input("Enter role (user/admin/moderator)") or "user"
        }

    @staticmethod
    def get_user_id() -> int:
        """Get user ID from input"""
        try:
            return int(UserView.get_user_input("Enter user ID"))
        except ValueError:
            return -1


class ConsoleView:
    """Console-based view implementation"""

    def __init__(self):
        self.user_view = UserView()

    def render(self, template: str, data: dict = None):
        """Render a template with data"""
        # Simple template rendering
        if data:
            for key, value in data.items():
                template = template.replace(f"{{{key}}}", str(value))
        print(template)


# Example usage
if __name__ == "__main__":
    from model import User, UserModel

    view = UserView()
    model = UserModel()

    # Demo the view
    view.show_header("MVC VIEW DEMO")

    users = model.get_all_users()
    view.show_user_list(users)

    print()
    view.show_user_detail(users[0])

    view.show_stats(model.get_role_stats())

    view.show_message("User created successfully!", "success")
    view.show_message("Email already exists!", "error")
    view.show_message("This is a warning", "warning")

    view.show_menu()