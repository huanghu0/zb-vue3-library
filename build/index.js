const path = require('path')
const fs = require('fs-extra')
const { spawn } = require('child_process')

const root = path.resolve(__dirname, '..')
const esPath = path.resolve(root, 'packages/zb-vue3-lib/es')
const libPath = path.resolve(root, 'packages/zb-vue3-lib/lib')
console.log(root)
const main = async () => {
    // console.log(esPath,libPath,fs.existsSync(esPath),fs.existsSync(libPath))
  if (fs.existsSync(esPath)) {
    await fs.remove(esPath)
  }
  if (fs.existsSync(libPath)) {
    await fs.remove(libPath)
  }

  spawn('vite', ['build'], {
    cwd: root,
    stdio: 'inherit',
    shell: true
  })
}

main()
