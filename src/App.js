import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import cf from './config';


class App extends React.Component {
	state = {
		mapData: []
	}

	componentDidMount() {
		this.fetchData(cf.url);
	}

  fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
		await this.setState({mapData:data});
		await console.log(this.state.mapData)
  };

	render(){
    const mapData = this.state.mapData.map((i) => {
      return ` 
		  <item turbo="true">
      <link>${i.url_node}</link>
        <turbo:content>
       	<header>
				<figure>
						<img src=${i.photo} />
				</figure>
					<h1>${i.title}</h1>
				</header>
				  ${i.body}
        </turbo:content>
        </item>
     `}); 

  return (
    <div>
			{ReactHtmlParser(mapData)}	
    </div>
  )
	}
}

export default App;
