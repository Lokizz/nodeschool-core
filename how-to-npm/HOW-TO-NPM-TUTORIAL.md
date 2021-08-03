## 0. Install the latest npm version
`npm install npm -g`

## 1. Setup a development environment
`npm init` to create a package.json file.

## 2. Login
`npm adduser` to login account of npmjs.com

## 3. Start a project 
`npm init --scope=<username>` to create a project with scope

## 4. Install a module
Dependencies are fetched from the registry, and unpacked in the `node_modules` folder.
`npm install <moudulename>`

## 5. Listing dependencies
`npm ls` to show what you have installed (your dependencies).

## 6. npm TEST
`npm test` to test the script (package.json -- "scripts" property) that runs to make sure everything is good.

## 7. Package niceties
`repository` property in `package.json` would make your project polished.

## 8. Publish
`npm publish` publishes a package to the registry so that in can be installed by name.
`npm view` command is a great way to view package details, to see what you just published, and to check if a name is already taken.

## 9. Version
Version numbers in npm follow a standard called "SemVer". The specification for this standard can be found at http://semver.org.
After the update of your package, you should publish the package again.

## 10. Dist tag
`npm dist-tag add <pkg>@<version> [<tag>]` will add a new tag. To find out the name of your current package/version type `npm ls`.

## 11. Dist tag removal
`npm dist-tag rm <pkg> <tag>` is to clear a tag that is no longer in use from the package. The only dist-tag you CAN'T ever remove is "latest" which is allowed to point to the other version.

## 12. Outdated
`npm outdated` command can detect compatible releases programmatically.

## 13. Update the outdated package
`npm update` command can update all the packages listed to the latest version.

## 14. Rm
`npm rm <pkg>` is to delete the installed package.