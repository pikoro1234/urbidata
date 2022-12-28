export default async function getAllNotificaciones(){

    const data = await fetch('./notificaciones.json', {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const notificaciones = await data.json()
    return notificaciones           
}