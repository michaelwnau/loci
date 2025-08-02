import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container mx-auto p-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Tauri + React + ShadCN/UI</CardTitle>
          <CardDescription>
            A beautiful desktop app with modern UI components
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center space-x-4">
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo vite h-16 w-16" alt="Vite logo" />
            </a>
            <a href="https://tauri.app" target="_blank">
              <img src="/tauri.svg" className="logo tauri h-16 w-16" alt="Tauri logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react h-16 w-16" alt="React logo" />
            </a>
          </div>
          <p className="text-center text-muted-foreground">
            Click on the Tauri, Vite, and React logos to learn more.
          </p>

          <form
            className="flex space-x-2"
            onSubmit={(e) => {
              e.preventDefault();
              greet();
            }}
          >
            <Input
              id="greet-input"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Enter a name..."
              className="flex-1"
            />
            <Button type="submit">Greet</Button>
          </form>
          
          {greetMsg && (
            <Card>
              <CardContent className="pt-6">
                <p className="text-center font-medium">{greetMsg}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
