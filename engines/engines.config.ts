type LibsConfig = {
  name: string;
  version: string;
  engines: {
    os: "win" | "osx" | "linux",
    arch: "x32" | "x64",
    binPath: string;
  }[]
}

export const libsConfig: LibsConfig = {
  name: "aria2",
  version: "1.30.0",
  engines: [
    {
      os: "win",
      arch: "x32",
      binPath: "./aria2-1.30.0-win-32bit/aria2c.exe"
    },
    {
      os: "win",
      arch: "x64",
      binPath: "./aria2-1.30.0-win-64bit/aria2c.exe"
    },
    {
      os: "osx",
      arch: "x64",
      binPath: "./aria2-1.30.0-osx-64bit/bin/aria2c"
    }
  ]
}