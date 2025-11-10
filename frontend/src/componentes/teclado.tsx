import Boton from './botones';

interface Props{
    input: string;
    setInput: (val: string) => void;
    operacion: string;
    setOperacion: (val: string) => void;
    setResultado: (val: number | null) => void;
}

const operdoresMap: Record<string, string> = {
    '+': 'sumar',
    '-': 'restar',
    '*': 'multiplicar',
    '/': 'dividir'
}

export default function Teclado({ input, setInput, operacion, setOperacion, setResultado}: Props){
    const agregarNumero = (num: string) => setInput(input + num);
    const borrar = () => setInput(input.slice(0, -1));
    const limpiar = () => {
        setInput('');
        setOperacion('');
        setResultado(null);
    };

    const calcular = async () => {
        const numeros = input.split(/[^0-9.]+/).map(Number);
        try{
        const res = await fetch(`http://localhost:3000/${operacion}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({numeros}),
        });

        if(!res.ok) throw new Error('Error en la respuesta del servidor');
        
        const data = await res.json();
        setResultado(data.resultado ?? data);
        } catch (error){
            console.error('Error al calcular:', error);
            alert('No se pudo conectar con el backend')
        }
    };

    return (
        <div className='teclado'>
            {['7','8','9','/','4','5','6','*','1','2','3','-','0','AC','←','+','='].map((texto) => {
                const tipo = ['+','-','*','/'].includes(texto) ? 'operacion' :
                             ['AC','←','='].includes(texto) ? 'especial' : 'numero';

                const onClick = texto === 'AC' ? limpiar :
                        texto === '←' ? borrar :
                        texto === '=' ? calcular :
                        tipo === 'operacion' 
                        ? () => {
                            setOperacion(operdoresMap[texto]);
                            setInput(input + texto);
                        }: () => agregarNumero(texto);

                return <Boton key={texto} texto={texto} tipo={tipo} onClick={onClick} />;
            })}
        </div>
    );
}
