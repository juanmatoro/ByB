import { Exercise } from './exercise'; // Asegúrate de tener la ruta correcta a la interfaz Exercise

export interface Routine {
    _id?: any;
    name?: any;
    date?: any;
    comment?: any;
    owner?: any;
    exercise: Exercise[];
}