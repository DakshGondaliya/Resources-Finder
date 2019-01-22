# VSCode setup used in the course

### Theme

I use the `Monokai` theme with the dimmed bg option. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=gerane.Theme-Monokai)

### Extensions used in this project

For each of the extensions, read the overview page in order to learn how to use it.

`Auto Close Tag` to automatically close HTML tags. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

`Auto Rename Tag` to automatically change matching HTML tags. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

`Color Highlight` to, as the name says, highlight colors in CSS. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

`Paste and Indent` to automatically indent pasted code. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-paste-and-indent)

`Path Intellisense` to autocomplete filenames. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

`Prettier` to automatically format code. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Other extensions I use (will keep it updated) 

`Project Manager` to easily switch between projects. One of the most useful extensions. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)

### Settings

If you want your editor to work and look exactly the same way as mine does in the project, you can copy these settings to your own settings file. Just go to settings in VSCode, and on the right side, you can paste this code.

```
{
  {
    "atomKeymap.promptV3Features": true,
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.formatOnPaste": true,
    "editor.fontSize": 12,
    "editor.snippetSuggestions": "top",
    "window.zoomLevel": 1,
    "editor.tabSize": 2,
    "editor.wordWrap": "on",
    "workbench.iconTheme": "vscode-icons",
    "editor.formatOnSave": true,
    "workbench.colorTheme": "Monokai",
    "emmet.triggerExpansionOnTab": true,
    "emmet.showSuggestionsAsSnippets": true,
    "files.autoSave": "onFocusChange"
}
}
```
