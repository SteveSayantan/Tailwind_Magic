### Steps to install Tailwind CSS:

1. Initialize the npm.

1. Refer to the CLI installation part of the official docs.

1. Set the content path (string) inside tailwind.config as `./Specific_Folder/**/*.{html,js}`     (We have to specify the exact file path of the html and js files,otherwise the js files inside node module folder will be scanned by tailwind. `**` represents zero or more subdir inside the parent dir)

1. Set the script to build and minify in package.json. 

1. Use the minified build for production purposes.

1. Refer to Tailwind Labs YT channel for any query.


