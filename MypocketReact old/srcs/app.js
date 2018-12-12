class User extends React.Component{
  render(){
    return (
      <div>
      <h1>{this.props.nickname}</h1>
      the user n°{this.props.id}, you can <a href="mailto:{this.props.mail}">contact</a>
      </div>
    )
  }
}

class Collection extends React.Component{
  render(){
    const listLink = this.props.links.map((link) => {

      return <div key={link.id}><Link url={link.url} tags={link.tags} /></div>
    })

    return (
      <div>
        {listLink}
      </div>
    )
  }
}

class Link extends React.Component{
    render(){
      const listTags = this.props.tags.map(tag => {return <Tag key={tag} tag={tag} />})

      return(
        <ul>
          <li>
          <a href={this.props.url}>{this.props.url}</a></li>
          {listTags}
        </ul>
      )
  }
}

class Tag extends React.Component{
  render(){
    return(
      <ol>{this.props.tag}</ol>
    )
  }
}

const links1 = [
  {
    id: 1,
    url: "test.com",
    tags: [
      "QA testeur",
      "hack",
      "tu peux pas test"
    ]
  },
  {
    id: 2,
    url: "quadra.com",
    tags: [
      "liberte",
      "internet"
    ]
  },
  {
    id: 3,
    url: "frama.com",
    tags: [
      "libre",
      "degoogeliser",
      "open"
    ]
  },
  {
    id: 4,
    url: "chaton.com",
    tags: [
      "herbegement",
      "serveur",
      "libre"
    ]
  }
]
const links2 = [
  {
    id: 1,
    url: "allocine.com",
    tags: [
      "film",
      "chill",
      "avis"
    ]
  },
  {
    id: 2,
    url: "netflix.com",
    tags: [
      "chill",
      "movie",
      "serie"
    ]
  },
  {
    id: 3,
    url: "efrei.com",
    tags: [
      "ecole",
      "alternance",
      "ingenieur"
    ]
  },
  {
    id: 4,
    url: "truc.com",
    tags: [
      "pas d'idée",
      "page blanche",
      "shit"
    ]
  }
]
const user1 = {
  id: 1,
  nickname: "Slok",
  mail: "truc@free.com"
}
const user2 = {
  id: 2,
  nickname: "Louis",
  mail: "truc@efrei.com"
}

class App extends React.Component{
  render(){
    return (
      <div id="block">
        <div id="user">
          <User id={user1.id} nickname={user1.nickname} mail={user1.mail} />
          <Collection links={links1} />
        </div>
        <div className="user">
          <User id={user2.id} nickname={user2.nickname} mail={user2.mail} />
          <Collection links={links2} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
