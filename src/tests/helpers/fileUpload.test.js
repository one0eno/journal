import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from "cloudinary";


cloudinary.config({
    cloud_name: "dnq4eujp8",
    api_key: "719643769528571",
    api_secret:"OH2bQ2f4fb4Jow-yKs5fdVHT4Xc"
})

describe("Prueba de fileUpload", () => {


  test("Debe subir un archivo y retornarl una url", async () => {
    let urlre = "";
    const responsefetch = await fetch(
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    );

    const blob = await responsefetch.blob();

    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    

    cloudinary.api.delete_resources([imageId], () => {
      
        
    });
    
    //expect(url).toContain("http");
  });

  test("Debe de retornar un error", async () => {

        const file = new File([],'foto.jpg')
        const url = await fileUpload(file);

        expect( typeof url ).toBe('undefined');
  });
});
