interface Props{
    input: string;
    resultado: number | null;
}

export default function Pantalla({input, resultado}: Props){
    return(
        <div className="pantalla">
        <div className="input">{input}</div>
        {!resultado === null && <div className="resultado" >= {resultado}</div>}
        </div>
    );
}