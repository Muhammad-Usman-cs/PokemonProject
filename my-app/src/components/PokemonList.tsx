import { Link } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../app/createApi'

export const PokemonList = ({name} : {name:string}) => {
  const { isLoading, data } = useGetPokemonByNameQuery(name);

  return (  
    <>
     {isLoading ? (
      <div className="container-loader">
      <span>Loading..</span>
      </div>
     ) : 
      (
        <Link to={`/pokemon/${data?.id}`} className='card-pokemon'>
        			<div className='card-img'>
			</div>
          <div className='card-info'>
            <span className='pokemon-id'> Pokemon No# {data?.id}
            
              {data?.species?.name} {isLoading ? '...' : ''}
            </span>
			</div>
      </Link>
      )}
      </>
  )
}