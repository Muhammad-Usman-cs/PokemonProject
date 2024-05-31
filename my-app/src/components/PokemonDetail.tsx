import { useGetPokemonByIdQuery } from '../app/createApi'

export const PokemonDetail = ({id,} : {id: number}) => {
  const { isLoading, data } = useGetPokemonByIdQuery(id)
  return (  
    <main className='container main-pokemon'>
            <h1>Pokémon Detail</h1>
     {isLoading ? (
        <div className="container-loader">
        <span>Loading..</span>
        </div>
     ) : 
      (
        <>
        <div className='header-main-pokemon'>
            <span className='number-pokemon'>#{data.id}</span>
            <div className='container-img-pokemon'>
                <img
                    src={data.sprites.other.dream_world.front_default}
                    alt={`Pokemon ${data?.name}`}
                />
            </div>

            <div className='container-info-pokemon'>
                <h1>{data.name}</h1>
                    <p>Height: {data.height}</p>
                <p>Weight: {data.weight}</p>
                <p>Types: {data?.types?.map((type: { type: { name: string } }) => (
                        <span key={type?.type?.name} className={`${type?.type?.name}`}>
                            { `${type?.type?.name} ` } 
                        </span>
                    ))}</p>
            </div>
        </div>

    </>
      )}
      </main>
  )
}