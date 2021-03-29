import { ChatEngine } from 'react-chat-engine'
import './App.css'

export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='miguel'
			userSecret='123123'
			projectID='f733f1a9-e593-4519-b84f-490f7093322c'
		/>
	);
}

export default App