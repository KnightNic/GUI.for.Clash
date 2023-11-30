import * as App from '@wails/go/main/App'
export * from '@wails/runtime/runtime'

export const Writefile = async (path: string, content: string) => {
  const { flag, data } = await App.Writefile(path, content)
  if (!flag) {
    throw data
  }
  return data
}

export const Readfile = async (path: string) => {
  const { flag, data } = await App.Readfile(path)
  if (!flag) {
    throw data
  }
  return data
}

export const UnzipZIPFile = async (path: string, output: string) => {
  const { flag, data } = await App.UnzipZIPFile(path, output)
  if (!flag) {
    throw data
  }
  return data
}

export const Download = async (url: string, path: string) => {
  const { flag, data } = await App.Download(url, path)
  if (!flag) {
    throw data
  }
  return data
}

export const HttpGet = async (url: string, headers = {}) => {
  const { flag, header, body } = await App.HttpGet(url, headers)
  if (!flag) {
    throw body
  }
  return { header, body }
}

export const HttpGetJSON = async (url: string, headers = {}) => {
  const { flag, header, body } = await App.HttpGet(url, headers)
  if (!flag) {
    throw body
  }
  return { header, json: JSON.parse(body) }
}

export const Exec = async (path: string, ...args: string[]) => {
  const { flag, data } = await App.Exec(path, args)
  if (!flag) {
    throw data
  }
  return data
}

export const StartKernel = async (path: string, directory: string) => {
  const { flag, data } = await App.StartKernel(path, directory)
  if (!flag) {
    throw data
  }
  return Number(data)
}

export const KernelRunning = async (pid: number) => {
  if (pid === 0) return false
  const { flag, data } = await App.ProcessInfo(pid)
  if (!flag) {
    throw data
  }
  return data.startsWith('clash')
}

export const KillProcess = async (pid: number) => {
  const { flag, data } = await App.KillProcess(pid)
  if (!flag) {
    throw data
  }
  return data
}

export const SetSystemProxy = async (port: number) => {
  const proxyServer = '127.0.0.1' + ':' + port
  const { flag, data } = await App.SetSystemProxy(true, proxyServer)
  if (!flag) {
    throw data
  }
  return data
}

export const ClearSystemProxy = async () => {
  const { flag, data } = await App.SetSystemProxy(false, '')
  if (!flag) {
    throw data
  }
  return data
}

export const GetSystemProxy = async () => {
  const { flag, data } = await App.GetSystemProxy()
  if (!flag) {
    throw data
  }
  return data
}