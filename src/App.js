import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style/App.scss"

function App() {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
