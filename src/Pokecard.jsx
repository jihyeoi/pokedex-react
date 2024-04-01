function Pokecard({ id, name, type, base_experience,  }) {
    return (
        <div className="Pokecard">
            <b className="Pokecard-name">{name}</b>
            <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <p className="Pokecard-type">{type}</p>
            <p className="Pokecard-type">{base_experience}</p>
        </div>
    )
}

export default Pokecard;