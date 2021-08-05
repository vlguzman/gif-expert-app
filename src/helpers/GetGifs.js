



    export const getGifs = async( category ) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&api_key=hSB4pGY7vqkY75YuCfPLybJHzM1mnvbK&limit=10`;
        const resp = await fetch( url );
        const { data } = await resp.json();
        // console.log(data)
        const gifs = data.map( ({ id, title, images}) => {

            return {
                id: id,
                title: title,
                url: images?.downsized_medium.url
            }

        })

        return gifs;

    }