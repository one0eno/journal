export const fileUpload = async(file) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dnq4eujp8/upload'
    const formData = new FormData()
    formData.append('upload_preset','react-journal')
    formData.append('file',file)

    try{
        console.log("=============")

        const resp = await fetch(cloudUrl,{
            method: 'POST',
            body: formData
            
        })

        console.log("=============")
        console.log(resp)
        const data = await resp.json()
        console.log(data)
        return data.secure_url
        // if (resp.ok)
        // {
        //     console.log(resp)
        //     //const data = await resp.js()
        //     return 
        // } else {

        //     throw await resp.json() 
        // }

       

    } catch(error) {
        throw error
    }
    //return 
}