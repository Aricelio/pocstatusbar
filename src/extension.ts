import * as vscode from 'vscode';

// Import status bar module
let statusBarItem: vscode.StatusBarItem;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Starting PocStatusBar extension');

	// First Example
	//let disposable = showInformationMessage();
	//context.subscriptions.push(disposable);

	// Second Example
	let priority = 1000;
	statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, priority);
	context.subscriptions.push(statusBarItem);
	updateStatusBarItem(context);
}

// Show information message
function showInformationMessage() {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('pocstatusbar.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		vscode.window.showInformationMessage('Hello World from PocStatusBar!');
	});

	return disposable;
}

// Update status bar item
function updateStatusBarItem(context: vscode.ExtensionContext):void {
	statusBarItem.text = 'Ari';
	statusBarItem.tooltip = 'Hello!';
	statusBarItem.show();
}

// This method is called when your extension is deactivated
export function deactivate() {}