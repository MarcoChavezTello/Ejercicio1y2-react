import { TaskList } from "./components/TaskList";

export const Segundo = ()=>{
    const tasks = [
        { id: 1, text: 'Aprender React', completed: true },
        { id: 2, text: 'Construir una app', completed: false },
        { id: 3, text: 'Explorar más proyectos', completed: false },
      ];
    return(
        <>
        <h1>Ejercicio número 2</h1>
            <p>Crea un componente TaskList que tome un prop llamado tasks, que sera un array de tarea con propiedades id,
 text, y completed. Renderiza una lista de tareas con el texto de cada tarea. Aplica estilos para resaltar 
 las tareas completadas.</p>
         <TaskList tasks={tasks}/>
        </>
        
    )
}