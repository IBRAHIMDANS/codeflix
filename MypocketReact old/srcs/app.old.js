class User extends React.Component {

  render(){
    return (
      <ul>
        <li> id :{this.props.id} </li>
        <li> nickname :{this.props.nickname} </li>
        <li> email :{this.props.mail} </li>
      </ul>
    );
  }
}

class Link extends React.Component {
  render(){
    const listTag =  this.props.tags.map(tag => {return <Tag key={tag} tag= {tag} />;})
    return (
      <ul>
        <li>
          <a href=" {this.props.id} "> {this.props.url}  </a>
          {listTag}
        </li>
      </ul>
    );
  }
}

class Tag  extends React.Component {
  render(){
    return (
      <ul>
        <li>  {this.props.tag}  </li>
      </ul>
    )
  }
}

class Collection  extends React.Component {
  render(){
const listLink = this.props.links.map(links =>{return <Link key= {links.id} url= {links.url} tag= {links.tags} />})
    return (
      <div>
        {listLink}
      </div>
    )

  }
}


class App extends React.Component{


  render(){
    const links = [
        {
          "id": "1",
          "url": "test.com",
          "tags": [
            "A",
            "B",
            "C"]
        },
        {
          "id": "2",
          "url": "test.com",
          "tags": [
            "C",
            "D",
            "E"]
        },
        {
          "id": "3",
          "url": "test.com",
          "tags": [
            "F",
            "G",
            "H"
          ]
        },
      ];
    return (
      <div>
        <h1> My Pocket</h1>
          <h2> Users</h2>
        <User id="1" nickname="Louis" mail = "ralala@lala.fr" />
        <User id="2" nickname="Ben" mail = "ebn@lala.fr" />

        <h2> Links</h2>
        <Link id="1" url="file.cod"  tags={['A','B','C']} />
        <Link id="3" url="fie.co"  tags={['A','B','C']} />

        <h2> Tags</h2>
        <Tag tag= "A"/>
        <Tag tag= "B"/>
        <Tag tag= "C"/>
        <Tag tag= "D"/>

        <h2> Collections</h2>
        <Collection links = {links}/>

      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"))
