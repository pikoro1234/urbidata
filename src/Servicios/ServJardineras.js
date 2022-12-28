export default async function getAllJardineras(){

    const data = await fetch('./jardineras.json', {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const jardineras = await data.json()
    return jardineras           
}