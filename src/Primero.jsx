import { ColorChanger } from "./components/ColorChanger"

export const Primero = ()=>{
    const containerStyle = {
        display: 'flex', // Habilita flexbox
        justifyContent: 'center', // Centra los elementos horizontalmente
        alignItems: 'center', // Centra los elementos verticalmente
        gap: '20px', // Espacio entre los elementos
      };

    return(
        <div>
            <h1>Ejercicio número 1</h1>
            <p>Crea un componente ColorChanger que muestre un cuadrado de color. Pasa un prop llamado color al componente 
que determine el color del cudrado. Agrega estilos para ajustar el tamaño del cuadrado y aplicar el color
 recibido.</p>
            <hr />
            <div style={containerStyle}>
            <ColorChanger color='red' />
            <ColorChanger color='green' />
            <ColorChanger color='black' />
            <ColorChanger color='orange' />
            <ColorChanger color='brown' />
            <ColorChanger color='purple' />
            <ColorChanger color='pink' />
            <ColorChanger color='blue' />
            </div>
        </div>
        
    )
}