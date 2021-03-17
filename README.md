# nrelay-project
An example project using the [nrelay](https://github.com/Extacy/nrelay) framework.

# Install
1. Clone the repository
```
git clone https://github.com/Extacy/nrelay-project --recurse-submodules
```
2. Compile submodules (run in **`./nrelay`** and **`./nrelay/realmlib`**)
```
npm install && tsc -p .
```
2. Update `src/nrelay/accounts.json` with your own accounts. The example account provided contains optional values, the only options required are **guid** and **password**.
3. Update `src/nrelay/proxies.json`. This step is optional, if you want your accounts to use a proxy when connecting to RotMG servers/http requests. Note that there is a limit of 4 accounts per IP, per server. An example is provided, please note that only Socksv4/Socksv5 proxies are supported.

# Usage
1. Edit the RunOptions in `index.ts`, if required.
2. Create your own plugins in `src/plugins`
3. Compile the project
```
tsc -p .
```
4. Run the compiled code
```
node lib/index.js
```