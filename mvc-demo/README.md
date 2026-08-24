# MVC Architecture Demo

A Python implementation demonstrating the Model-View-Controller (MVC) architectural pattern.

## 🏗️ Architecture Overview

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   MODEL     │────▶│  CONTROLLER │────▶│    VIEW     │
│  (Data)     │     │  (Logic)    │     │   (UI)      │
└─────────────┘     └─────────────┘     └─────────────┘
      ▲                                   │
      │                                   ▼
      └───────────────────────────────────┘
              User Interaction
```

## 📁 File Structure

```
mvc-demo/
├── model.py       # Data layer - User model & UserModel class
├── view.py        # Presentation layer - UserView & ConsoleView classes
├── controller.py  # Business logic layer - UserController class
├── main.py        # Entry point
└── README.md      # This file
```

## 🔧 Components

### Model (`model.py`)
- **User** - Data class representing a user entity
- **UserModel** - Manages user data (CRUD operations, validation, business rules)
  - In-memory storage (easily replaceable with database)
  - Email uniqueness validation
  - Role-based filtering
  - Statistics generation

### View (`view.py`)
- **UserView** - Console-based UI components
  - Formatted tables and cards
  - Menu display
  - Input handling
  - Message types (success, error, warning, info)
- **ConsoleView** - Template rendering utility

### Controller (`controller.py`)
- **UserController** - Coordinates Model and View
  - Handles user input
  - Delegates to Model for data operations
  - Selects appropriate View methods
  - Main application loop

## 🚀 Running the Demo

```bash
cd mvc-demo
python main.py
```

## 💡 Menu Options

1. **List all users** - Display formatted user table
2. **View user details** - Show detailed user card
3. **Create new user** - Add user with validation
4. **Update user** - Modify existing user
5. **Delete user** - Remove user with confirmation
6. **View statistics** - Show user counts by role
0. **Exit** - Quit application

## 🎯 Key MVC Principles Demonstrated

| Principle | Implementation |
|-----------|----------------|
| **Separation of Concerns** | Each layer has distinct responsibility |
| **Single Responsibility** | Model handles data, View handles UI, Controller handles flow |
| **Loose Coupling** | Layers communicate through well-defined interfaces |
| **Reusability** | Model/View can be swapped independently |
| **Testability** | Each component can be unit tested in isolation |

## 🔄 Data Flow Example

1. User selects "Create User" from menu (View)
2. Controller gets input from View
3. Controller calls Model.create_user()
4. Model validates & stores user
5. Controller gets result from Model
6. Controller tells View to show success/error
7. View renders appropriate message

## 🧪 Extending the Demo

### Add Database Support
```python
# In model.py, replace in-memory dict with:
import sqlite3
# or SQLAlchemy, Django ORM, etc.
```

### Add Web Interface
```python
# Replace ConsoleView with:
from flask import Flask, render_template
# or FastAPI, Django, etc.
```

### Add API Layer
```python
# New controller for REST API:
class UserAPIController:
    def get_users(self): return jsonify(model.get_all_users())
```

## 📚 Learning Outcomes

- Understand MVC pattern structure
- See practical separation of concerns
- Learn how components communicate
- Practice clean code organization
- Foundation for frameworks like Django, Rails, Spring

---
*Educational demo for learning software architecture patterns*