import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const toBuffer = async (file) => {
  var buffer = await file.arrayBuffer();
  return buffer;
};

const toByte = async (files) => {
  const pdfDoc = await PDFDocument.create();
  for (var i = 0; i != files.length; i++) {
    var buffer = await toBuffer(files[i]);
    var type = files[i].type;
    if (type == "application/pdf") {
      const loader = await PDFDocument.load(buffer);
      var j = 0;
      while (true) {
        try {
          const [firstDonorPage] = await pdfDoc.copyPages(loader, [j]);
          pdfDoc.addPage(firstDonorPage);
          j++;
        } catch (e) {
          break;
        }
      }
    } else {
      const page = pdfDoc.addPage();
      const { width, height } = page.getSize();

      var image;
      if (type == "image/jpeg") {
        image = await pdfDoc.embedJpg(buffer);
        page.setSize(image.width, image.height);
        page.drawImage(image);
      } else if (type == "image/png") {
        image = await pdfDoc.embedPng(buffer);
        page.setSize(image.width, image.height);
        page.drawImage(image);
      }
    }
  }
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};

const toBlob = async (file) => {
  var b = await toByte(file);
  var blob = new Blob([b], { type: "application/pdf" });

  return blob;
};

const toFile = async (file) => {
  var blob = toBlob(file);
  var f = new File([blob], "result.pdf");
  return f;
};

const converter = {
  toFile: toFile,
  toByte: toByte,
  toBlob: toBlob,
};
export default converter;
