interface Props{
    texto: string;
    onClick: () => void;
    tipo?: 'numero' | 'operacion' | 'especial';
}

export default function Boton({ texto, onClick, tipo = 'numero'}: Props) {
    return (
        <button className={`boton ${tipo}`} onClick={onClick}>
            {texto}
        </button>
    )
}