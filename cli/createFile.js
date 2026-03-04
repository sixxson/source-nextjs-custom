#!/usr/bin/env node

const readline = require("readline");
const fs = require("fs");
const path = require("path");

// Simple colors helper to replace cli-color
const clc = {
	greenBright: text => `\x1b[92m${text}\x1b[0m`,
	blueBright: text => `\x1b[94m${text}\x1b[0m`,
	redBright: text => `\x1b[91m${text}\x1b[0m`,
	xterm: code => text => `\x1b[38;5;${code}m${text}\x1b[0m`,
	italic: text => `\x1b[3m${text}\x1b[23m`,
};

function createFolder(folderName) {
	if (!folderName) {
		console.log(clc.redBright("Please provide a folder name: npm run createFile <folderName>"));
		process.exit(1);
	}

	const defaultPath = path.join(process.cwd(), "components", "modules", folderName);
	const initialAppPath = path.join(process.cwd(), "app", "(client)");

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	const toPascalCase = str => {
		return str
			.split(/[-_]/)
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join("");
	};

	const getTsxContent = name => {
		const componentName = toPascalCase(name);
		return `import React from 'react';
import './${name}.scss';

const ${componentName} = () => {
    return (
        <section className="${name}">
            <div className="container">
                <h1>${componentName} component</h1>
            </div>
        </section>
    );
};

export default ${componentName};
`;
	};

	const getScssContent = name => {
		return `.${name} {
    // Style for ${name}
}
`;
	};

	const getPageContent = (imports, components) => {
		return `import React from 'react';
${imports}

export default function Page() {
    return (
        <>
            ${components}
        </>
    );
}
`;
	};

	console.log(
		clc.xterm(165)(clc.italic(`🤌 ➝ Please select an option:`)),

		clc.xterm(36)(`\n    1. `) +
		clc.xterm(15)(`Single folder and files (create 📁 `) +
		clc.xterm(208)(`${folderName}`) +
		clc.xterm(15)(` contain`) +
		clc.xterm(201)(` ${folderName}.scss `) +
		clc.xterm(15)(`and`) +
		clc.xterm(201)(` ${folderName}.tsx)`),

		clc.xterm(36)(`\n    2. `) +
		clc.xterm(15)(`List folder and files (create 📁 `) +
		clc.xterm(208)(`List`) +
		clc.xterm(15)(` and`) +
		clc.xterm(208)(`  📁 Detail`) +
		clc.xterm(15)(`, each contain `) +
		clc.xterm(201)(`${folderName}List.scss`) +
		clc.xterm(15)(` and `) +
		clc.xterm(201)(`${folderName}List.tsx`),

		clc.xterm(36)(`\n    3. `) +
		clc.xterm(15)(`Multiple sections (create `) +
		clc.xterm(208)(`${folderName}-1`) +
		clc.xterm(15)(", ") +
		clc.xterm(208)(`${folderName}-2`) +
		clc.xterm(15)(`, ... 📁, each containing `) +
		clc.xterm(201)(`${folderName}-1.scss`) +
		clc.xterm(15)(`,`) +
		clc.xterm(201)(`${folderName}-1.tsx`) +
		clc.xterm(15)(`, etc.)`)
	);

	rl.on("line", answer => {
		if (answer === "1") {
			const compName = toPascalCase(folderName);
			const appFolderPath = path.join(initialAppPath, folderName);

			// Create module files
			fs.mkdirSync(defaultPath, { recursive: true });
			fs.writeFileSync(path.join(defaultPath, `${folderName}.tsx`), getTsxContent(folderName));
			fs.writeFileSync(path.join(defaultPath, `${folderName}.scss`), getScssContent(folderName));

			// Create app page
			fs.mkdirSync(appFolderPath, { recursive: true });
			const imports = `import ${compName} from '@/components/modules/${folderName}/${folderName}';`;
			const components = `<${compName} />`;
			fs.writeFileSync(path.join(appFolderPath, "page.tsx"), getPageContent(imports, components));

			console.log(clc.greenBright(`\nSuccessfully created module: components/modules/${folderName}`));
			console.log(clc.greenBright(`Successfully created page: app/(client)/${folderName}/page.tsx`));
			rl.close();
		} else if (answer === "2") {
			const listName = `${folderName}List`;
			const detailName = `${folderName}Detail`;
			const listCompName = toPascalCase(listName);
			const detailCompName = toPascalCase(detailName);

			// Create folders
			fs.mkdirSync(path.join(defaultPath, "List"), { recursive: true });
			fs.mkdirSync(path.join(defaultPath, "Detail"), { recursive: true });

			// Create files
			fs.writeFileSync(path.join(defaultPath, "List", `${listName}.tsx`), getTsxContent(listName));
			fs.writeFileSync(path.join(defaultPath, "List", `${listName}.scss`), getScssContent(listName));
			fs.writeFileSync(path.join(defaultPath, "Detail", `${detailName}.tsx`), getTsxContent(detailName));
			fs.writeFileSync(path.join(defaultPath, "Detail", `${detailName}.scss`), getScssContent(detailName));

			// Create app pages
			const listAppPath = path.join(initialAppPath, listName);
			const detailAppPath = path.join(initialAppPath, detailName);
			fs.mkdirSync(listAppPath, { recursive: true });
			fs.mkdirSync(detailAppPath, { recursive: true });

			fs.writeFileSync(
				path.join(listAppPath, "page.tsx"),
				getPageContent(`import ${listCompName} from '@/components/modules/${folderName}/List/${listName}';`, `<${listCompName} />`)
			);
			fs.writeFileSync(
				path.join(detailAppPath, "page.tsx"),
				getPageContent(`import ${detailCompName} from '@/components/modules/${folderName}/Detail/${detailName}';`, `<${detailCompName} />`)
			);

			console.log(clc.greenBright(`\nSuccessfully created List and Detail modules: components/modules/${folderName}`));
			console.log(clc.greenBright(`Successfully created pages: app/(client)/${listName}/page.tsx and app/${detailName}/page.tsx`));
			rl.close();
		} else if (answer === "3") {
			console.log(clc.blueBright("Enter the number of sections you want to create:"));
			rl.on("line", numberOfSections => {
				const numSections = parseInt(numberOfSections, 10);
				if (isNaN(numSections)) {
					console.log(clc.redBright("Invalid input. Please enter a valid number."));
					rl.close();
					return;
				}

				fs.mkdirSync(defaultPath, { recursive: true });
				let imports = "";
				let components = "";

				for (let i = 1; i <= numSections; i++) {
					const sectionName = `${folderName}-${i}`;
					const sectionCompName = toPascalCase(sectionName);
					const sectionPath = path.join(defaultPath, sectionName);

					fs.mkdirSync(sectionPath, { recursive: true });
					fs.writeFileSync(path.join(sectionPath, `${sectionName}.tsx`), getTsxContent(sectionName));
					fs.writeFileSync(path.join(sectionPath, `${sectionName}.scss`), getScssContent(sectionName));

					imports += `import ${sectionCompName} from '@/components/modules/${folderName}/${sectionName}/${sectionName}';\n`;
					components += `\t\t\t<${sectionCompName} />\n`;
				}

				// Create app page
				const appFolderPath = path.join(initialAppPath, folderName);
				fs.mkdirSync(appFolderPath, { recursive: true });
				fs.writeFileSync(path.join(appFolderPath, "page.tsx"), getPageContent(imports.trim(), components.trim()));

				console.log(clc.greenBright(`\nSuccessfully created ${numSections} sections in: components/modules/${folderName}`));
				console.log(clc.greenBright(`Successfully created page: app/(client)/${folderName}/page.tsx`));
				rl.close();
			});
		}
	});
}

console.log("-----------------------");
console.log(clc.greenBright("Running createFolder..."));
console.log("-----------------------");
const nameArg = process.argv[2];
createFolder(nameArg);
