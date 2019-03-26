import * as os from "os";

class System {
	private _arch = os.arch();
	private _platform = os.platform();

	public isOSX(): boolean {
		return this._platform.includes("darwin");
	}

	public isWindows(): boolean {
		return this._platform.includes("win32") || this._platform.includes("win64");
	}

	public isLinux(): boolean {
		return this._platform.includes("linux");
	}

	public isX64(): boolean {
		return this._arch.includes("x64");
	}

	public isX32(): boolean {
		return this._arch.includes("x32");
	}
}

export const system = new System();
