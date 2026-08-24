"""
MVC Architecture Demo - Controller Layer
The Controller handles user input, interacts with the Model, and selects the View to render.
It acts as an intermediary between Model and View.
"""

from model import UserModel
from view import UserView


class UserController:
    """Controller for managing user operations - coordinates Model and View"""

    def __init__(self):
        self.model = UserModel()
        self.view = UserView()
        self.running = True

    def handle_list_users(self):
        """Handle listing all users"""
        users = self.model.get_all_users()
        self.view.show_header("ALL USERS")
        self.view.show_user_list(users)

    def handle_view_user(self):
        """Handle viewing a specific user"""
        user_id = self.view.get_user_id()
        if user_id <= 0:
            self.view.show_message("Invalid user ID", "error")
            return

        user = self.model.get_user(user_id)
        self.view.show_header("USER DETAILS")
        self.view.show_user_detail(user)

        if not user:
            self.view.show_message(f"User with ID {user_id} not found", "error")

    def handle_create_user(self):
        """Handle creating a new user"""
        self.view.show_header("CREATE NEW USER")
        data = self.view.get_user_data()

        if not data["name"] or not data["email"]:
            self.view.show_message("Name and email are required", "error")
            return

        try:
            user = self.model.create_user(data["name"], data["email"], data["role"])
            self.view.show_message(f"User created successfully! ID: {user.id}", "success")
            self.view.show_user_detail(user)
        except ValueError as e:
            self.view.show_message(str(e), "error")

    def handle_update_user(self):
        """Handle updating a user"""
        self.view.show_header("UPDATE USER")
        user_id = self.view.get_user_id()

        if user_id <= 0:
            self.view.show_message("Invalid user ID", "error")
            return

        user = self.model.get_user(user_id)
        if not user:
            self.view.show_message(f"User with ID {user_id} not found", "error")
            return

        self.view.show_user_detail(user)
        print("\n  Enter new values (press Enter to keep current):")

        name = self.view.get_user_input(f"Name [{user.name}]")
        email = self.view.get_user_input(f"Email [{user.email}]")
        role = self.view.get_user_input(f"Role [{user.role}]")

        try:
            updated = self.model.update_user(
                user_id,
                name=name if name else None,
                email=email if email else None,
                role=role if role else None
            )
            self.view.show_message("User updated successfully!", "success")
            self.view.show_user_detail(updated)
        except ValueError as e:
            self.view.show_message(str(e), "error")

    def handle_delete_user(self):
        """Handle deleting a user"""
        self.view.show_header("DELETE USER")
        user_id = self.view.get_user_id()

        if user_id <= 0:
            self.view.show_message("Invalid user ID", "error")
            return

        user = self.model.get_user(user_id)
        if not user:
            self.view.show_message(f"User with ID {user_id} not found", "error")
            return

        self.view.show_user_detail(user)
        confirm = self.view.get_user_input("Are you sure? (yes/no)").lower()

        if confirm in ["yes", "y"]:
            self.model.delete_user(user_id)
            self.view.show_message("User deleted successfully!", "success")
        else:
            self.view.show_message("Deletion cancelled", "info")

    def handle_view_stats(self):
        """Handle viewing statistics"""
        self.view.show_header("SYSTEM STATISTICS")
        stats = {
            "total_users": self.model.get_user_count(),
            **self.model.get_role_stats()
        }
        self.view.show_stats(stats)

    def run(self):
        """Main application loop"""
        self.view.show_header("MVC ARCHITECTURE DEMO")
        self.view.show_message("Welcome to the User Management System!", "success")
        self.view.show_message("Pattern: Model-View-Controller (MVC)", "info")

        while self.running:
            self.view.show_menu()
            choice = self.view.get_user_input("Select option")

            try:
                if choice == "1":
                    self.handle_list_users()
                elif choice == "2":
                    self.handle_view_user()
                elif choice == "3":
                    self.handle_create_user()
                elif choice == "4":
                    self.handle_update_user()
                elif choice == "5":
                    self.handle_delete_user()
                elif choice == "6":
                    self.handle_view_stats()
                elif choice == "0":
                    self.view.show_message("Goodbye!", "success")
                    self.running = False
                else:
                    self.view.show_message("Invalid option. Please try again.", "warning")
            except KeyboardInterrupt:
                self.view.show_message("\nGoodbye!", "success")
                self.running = False
            except Exception as e:
                self.view.show_message(f"Error: {str(e)}", "error")


def main():
    """Entry point for the MVC application"""
    controller = UserController()
    controller.run()


if __name__ == "__main__":
    main()