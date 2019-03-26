import { system } from "./system";

const OSX = {
	arch: "x64",
	platform: "darwin"
};

const Linux = {
	arch: "x64",
	platform: "linux"
};

const Windows = {
	platform: "win32",
	arch: "x64"
};

describe("os", function() {
	function setRuntimeENVProperty(platform: { arch: string; platform: string }): void {
		// @ts-ignore
		system._arch = platform.arch;
		// @ts-ignore
		system._platform = platform.platform;
	}

	it("should export system object", function() {
		expect(system).toBeTruthy();
	});

	it("should return correct judge at OSX", function() {
		setRuntimeENVProperty(OSX);
		expect(system.isOSX()).toBeTruthy();
		expect(system.isLinux()).toBeFalsy();
		expect(system.isWindows()).toBeFalsy();
		expect(system.isX32()).toBeFalsy();
		expect(system.isX64()).toBeTruthy();
	});

	it("should return correct judge at Windows", function() {
		setRuntimeENVProperty(Windows);
		expect(system.isOSX()).toBeFalsy();
		expect(system.isLinux()).toBeFalsy();
		expect(system.isWindows()).toBeTruthy();
		expect(system.isX32()).toBeFalsy();
		expect(system.isX64()).toBeTruthy();
	});

	it("should return correct judge at Linux", function() {
		setRuntimeENVProperty(Linux);
		expect(system.isOSX()).toBeFalsy();
		expect(system.isLinux()).toBeTruthy();
		expect(system.isWindows()).toBeFalsy();
		expect(system.isX32()).toBeFalsy();
		expect(system.isX64()).toBeTruthy();
	});
});
