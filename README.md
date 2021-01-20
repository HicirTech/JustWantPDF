# Just Want PDF

<a href="https://www.npmjs.com/package/just-want-pdf">
    <img
      src="https://img.shields.io/npm/v/just-want-pdf.svg?style=flat-square"
      alt="NPM Version"
    />
</a>

Just-Give-Me is a package to help you to get PDF in node.js envrionment.  
Takes in many files, marge them, and output a single PDF result
<hr/>


<a href="https://hicirtech.github.io/JustWantPDF/">
    Demo Here
</a>

### Accept input file types

`.PDF` `.jpg` `.jpge` `.png`

### Output

`Byte Array` or `Blob Object` or `File Object`

### Usage

install package
`npm i just-want-pdf`

import to your project
`import converter from "just-want-pdf";`

Convertion
**Assumption**

```
import converter from "just-want-pdf";
var fileList = [File1, File2, File3...];
```

to byte array
` const result = converter.toByte(fileList)`

to blob
` const result = converter.toBlob(fileList)`

to File
` const result = converter.toByte(fileList)`

for display in iframe

```
    .....

    var result = convert.toBlob(fileList);
    const url =URL.createObjectURL(b);

    //use iframe to display url

    <iFrame src = {url} />

    ....
```
