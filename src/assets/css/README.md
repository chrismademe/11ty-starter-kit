### Foundation

This is the basic layer of design tokens such as colors, typography, spacings, iconography and their like. Basically the non-component basics I have my trouble with when defined and categorized as atoms. Assigning them an explicit category and naming it foundation makes clear that this affects every piece of the system.

### Elements

The “basic building block” components everyone thinks of when talking about atoms. Concretely they map to customized implementations of single HTML elements, like headings and buttons. But also these kinds of elements, that do not make any sense in HTML when used standalone, like list items. In this case a list would be the most non-dividable form and hence the element.

### Modules

Everything that can contain other components. I am defining components as a collective term for elements or modules – the distinction being whether or not they can contain other parts. In atomic design terms this is the group of molecules and organisms, avoiding the strict categorization. As you might have guessed, this distinction also does not find its expression in the file system: There is no folder hierarchy, just a single flat components directory which contains a single folder for each component.
