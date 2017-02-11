import { h, render } from 'preact';
import { Header, Title, Footer, Button, ButtonGroup, NavGroup, Table } from 'preact-photon';
/** @jsx h */


const FileList = ({ files }) => (
    <Table striped>
        <thead>
            <tr>
                <th>Name</th>
                <th>Kind</th>
                <th>Date Modified</th>
                <th>Author</th>
            </tr>
        </thead>
        <tbody>{
    		files.map( file => <FileListItem {...file} /> )
    	}</tbody>
    </Table>
);

const FileListItem = ({ name, type, date, author }) => (
    <tr>
        <td>{ name }</td>
        <td>{ type }</td>
        <td>{ date }</td>
        <td>{ author }</td>
    </tr>
);

const Sidebar = () => (
    <div class="pane pane-sm sidebar">
        <NavGroup>
            <NavGroup.Title>Places</NavGroup.Title>
            <NavGroup.Item icon="home">Home</NavGroup.Item>
            <NavGroup.Item icon="folder">Documents</NavGroup.Item>
            <NavGroup.Item icon="download">Downloads</NavGroup.Item>
            <NavGroup.Item icon="cloud">Desktop</NavGroup.Item>
        </NavGroup>
    </div>
);


const FILES = [
    { name:'index.html', type:'HTML', date:'Yesterday', author:'developit' },
    { name:'bundle.js', type:'JavaScript', date:'10:01 am', author:'developit' },
    { name:'photon.css', type:'CSS', date:'9:15 am', author:'connors' }
];

render((
    <div class="window">
        <Header>
            <Title>Preact-Photon Demo</Title>
    		<div class="toolbar-actions">
    			<ButtonGroup>
    				<Button icon="left" />
    				<Button icon="right" />
				</ButtonGroup>
	            <Button icon="arrows-ccw" class="pull-right" />
	            <Button icon="home">Home</Button>
    		</div>
        </Header>

        <div class="window-content">
    		<div class="pane-group">
				<Sidebar />
    			<div class="pane">
					<FileList files={FILES} />
				</div>
			</div>
        </div>

        <Footer>
            <Title>
    			{ FILES.length + ' items' }
            </Title>
        </Footer>
    </div>
), document.body);
