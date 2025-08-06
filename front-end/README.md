# Personal Portfolio

Welcome to my personal portfolio repository! This project showcases my skills, projects, and experiences as a developer.

## Features

-    **About Me**: Learn more about my background and interests.
-    **Projects**: Explore the projects I have worked on, including descriptions, technologies used, and links to live demos or repositories.
-    **Skills**: A list of my technical skills and proficiencies.
-    **Contact**: Ways to get in touch with me.

## Technologies Used

-    HTML5, CSS3, JavaScript
-    Frameworks/Libraries: [e.g., React, Vue.js]
-    Tools: [e.g., Git, Webpack]

## Getting Started

1. Clone the repository:
     ```bash
     git clone https://github.com/your-username/portfolio.git
     ```
2. Open the project in your favorite code editor.
3. Run the project locally using a development server.

## Contributing

Feel free to fork this repository and submit pull requests for improvements or suggestions.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

-    **Email**: your-email@example.com
-    **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
-    **GitHub**: [Your GitHub Profile](https://github.com/your-username)

Thank you for visiting my portfolio!

# Upgrading Next.js with Codemod

     To upgrade your Next.js project to the latest version using the official codemod tool, you can run the following command:

```bash
pnpm dlx @next/codemod@latest upgrade latest
```

### Steps:

     1. **Install and Run Codemod**:

          - The `pnpm dlx` command ensures you are using the latest version of the codemod without globally installing it.
          - The `upgrade latest` argument automatically updates your project to the latest Next.js version.

     2. **Review Changes**:

          - The codemod will modify your codebase to align with the latest Next.js features and best practices.
          - Review the changes in your version control system (e.g., `git diff`) before committing.

     3. **Test Your Application**:

          - After upgrading, run your application locally to ensure everything works as expected:
               ```bash
               pnpm dev
               ```

     4. **Update Dependencies**:
          - Ensure all related dependencies are compatible with the new Next.js version:
               ```bash
               pnpm install
               ```

### Notes:
