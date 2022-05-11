function Notice() {
    const NOTICE = {
        title: 'Curso REACT 2022',
        message: 'Bienvenidos al Informatorio 2022 3er etapa'
    }

    const { title, message} = NOTICE;

    return (
        <div>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    );
}

export default Notice;