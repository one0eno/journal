export const fileUpload = async(file) => {

    let urlCreate = null
    const cloudUrl ="https://api.cloudinary.com/v1_1/dnq4eujp8/upload"; 

    const formData = new FormData()
    formData.append('upload_preset','react-journal')
    formData.append('file',file)
    
    try{

        const resp = await fetch(cloudUrl,{
            method: 'POST',
            body: formData
        })

        const data = await resp.json()
        urlCreate =  data.secure_url

    } catch(error) {
       
        throw new Error(error)
        
    }
    
    return urlCreate
}