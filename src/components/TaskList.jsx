/* Crea un componente TaskList que tome un prop llamado tasks, que sera un array de tarea con propiedades id,
 text, y completed. Renderiza una lista de tareas con el texto de cada tarea. Aplica estilos para resaltar 
 las tareas completadas. */

 export const TaskList = (props) =>{

    return(
        <ul>
      {props.tasks.map((task) => (
        <li
          key={task.id}
          style={{
            textDecoration: task.completed ? 'line-through' : 'none', // Estilo condicional basado en si la tarea está completada
            color: task.completed ? 'green' : 'initial', // Cambiamos el color a verde para tareas completadas
            fontWeight: task.completed ? 'bold' : 'normal', // Hacemos el texto negrita para tareas completadas

          }}
        >
          {task.text}
        </li>
      ))}
    </ul>
    )
 }