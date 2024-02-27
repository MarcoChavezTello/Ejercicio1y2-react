/* Crea un componente ColorChanger que muestre un cuadrado de color. Pasa un prop llamado color al componente 
que determine el color del cudrado. Agrega estilos para ajustar el tamaño del cuadrado y aplicar el color
 recibido. */

 export const ColorChanger = (props) =>{
    // Estilos para el cuadrado
    const squareStyle = {
        margin:'20px',
        height: '150px', // Ajustamos la altura
        width: '150px', // Ajustamos la anchura
        backgroundColor: props.color, // Color de fondo
        borderRadius: '10px', // Bordes redondeados
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave
        transition: 'background-color 0.5s ease', // Transición suave del color
        display: 'flex', // Centramos el contenido (si hay) horizontal y verticalmente
        alignItems: 'center', // Alineación vertical
        justifyContent: 'center', // Alineación horizontal
        color: 'white', // Color del texto
        fontSize: '20px', // Tamaño del texto
      };

    return(
        <div style={squareStyle}></div> // Aplicamos los estilos al div para crear el cuadrado
        
    )
 }