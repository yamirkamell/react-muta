import { EDIT_USER, SET_INITIAL } from './types';

const initialState = 
   [{
    id: 6520,
    fecha: '1 may 2022',
    cliente: 'Simon Parrilla',
    estado: 'Recogido',
    pago: '$ 68,522',
    acu: '18,4',
    pet: '6',
    pasta: '1',
    trampa: '20,1'  
  },
  ];


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL:
      return {
        ...initialState
      };

    case EDIT_USER: {
      let newValue = [];
       state.forEach(x => {
        console.log(x.id);
        console.log(action.payload.id);
        if(x.id == action.payload.id){ 
          newValue.push(action.payload); 
        }     
        });
    return newValue;
      }
      
    default:
      return state;
  }
};

export default userReducer;
