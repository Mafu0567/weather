import Head from 'next/head'
import Error from 'next/error'
import fetch from 'node-fetch'

const Post = (props: {error: Error}) => {
  if ('error' in props) return <Error {...props.error} />

  const { title, lead } = props.data
  return (
    <div className='container'>
      <Head>
        <title>Startups disco</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <article>
        <h1>{title}</h1>
        <p>{lead}</p>
      </article>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { query } = context
  const id = query?.id
  const endpoint = process.env.feedEnv + '/post/' + id
  const apiResponse = await fetch(endpoint)
  const json = await apiResponse.json()

  if (!('error' in json)) {
    return {
      props: {
        staticData: 'hello world',
        data: json
      }
    }
  } else {
    context.res.statusCode = apiResponse.status
    return {
      props: {
        error: {
          statusCode: apiResponse.status,
          title: json.error.title || 'error fetching'
        }
      }
    }
  }
}

export default Post
