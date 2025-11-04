import { Toaster } from "react-hot-toast";

export default function ToasterComponent (){
    return (
        <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          
          className: '',
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },
      
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'white',
              secondary: 'green',
            },
            style:{
              background:"green"
            }
          },
          error: {
            duration: 3000,
            iconTheme: {
              primary: 'white',
              secondary: 'red',
            },
             style:{
              background:"red"
            }
          },
        }}
         />
    )
}