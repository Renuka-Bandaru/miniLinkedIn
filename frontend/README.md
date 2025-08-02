# Mini LinkedIn Community Platform

A modern, responsive LinkedIn-like community platform built with React, Material-UI, and Tailwind CSS.

## Features

### 🔐 User Authentication
- **Register/Login**: Email and password authentication
- **Profile Management**: Name, email, and bio fields
- **Persistent Sessions**: User data stored in localStorage

### 📝 Public Post Feed
- **Create Posts**: Text-only posts with rich formatting
- **Home Feed**: Display all posts with author information and timestamps
- **Real-time Updates**: Posts appear immediately after creation

### 👤 Profile Pages
- **Personal Profile**: View and edit your own profile
- **User Profiles**: View other users' profiles and their posts
- **Profile Editing**: Update name and bio information

### 🎨 Modern UI/UX
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Material-UI Components**: Professional, accessible components
- **Tailwind CSS**: Utility-first styling for consistent design
- **LinkedIn-inspired Theme**: Blue color scheme and professional layout

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Usage

### First Time Setup
1. Click "Sign Up" to create a new account
2. Fill in your name, email, password, and bio
3. Click "Create Account" to register

### Creating Posts
1. Log in to your account
2. Click "Create Post" button on the home page
3. Write your post content
4. Click "Post" to publish

### Managing Profile
1. Click "Profile" in the navigation bar
2. Click "Edit Profile" to modify your information
3. Update your name and bio
4. Click "Save Changes"

### Viewing Other Users
- Click on user names in posts to view their profiles
- Browse their posts and information

## Technical Stack

- **Frontend Framework**: React 19
- **UI Library**: Material-UI (MUI)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **State Management**: React Hooks + localStorage

## Project Structure

```
src/
├── components/
│   ├── Login.jsx          # User login component
│   ├── Register.jsx       # User registration component
│   ├── Home.jsx          # Main feed with posts
│   ├── Profile.jsx       # User profile pages
│   └── CreatePost.jsx    # Post creation component
├── App.jsx               # Main application component
├── App.css              # Global styles
└── main.jsx             # Application entry point
```

## Data Storage

The application uses browser localStorage for data persistence:
- **Users**: Stored in `localStorage.users`
- **Posts**: Stored in `localStorage.posts`
- **Current User**: Stored in `localStorage.user`

## Features in Detail

### Authentication System
- Email/password validation
- User registration with duplicate email checking
- Secure login with error handling
- Session persistence across browser sessions

### Post System
- Text-only posts with character limits
- Real-time timestamp display
- Author attribution with profile links
- Post feed with chronological ordering

### Profile System
- Editable user profiles
- Public profile viewing
- Post filtering by user
- Professional appearance with avatars

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interface
- Consistent spacing and typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- ESLint configuration included
- Prettier formatting
- Component-based architecture
- Functional components with hooks

## Future Enhancements

- [ ] Comments system
- [ ] Like/unlike posts
- [ ] User connections/following
- [ ] Image uploads
- [ ] Notifications
- [ ] Search functionality
- [ ] Backend API integration
- [ ] Real-time updates with WebSocket

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
