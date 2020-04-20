const getViewBox = name => {
  switch (name) {
    case 'sun':
      return '0 0 24.11 24.02'
    case 'cloud':
      return '0 0 42 27'
    case 'rain':
      return '0 0 50 50'
    default:
      return '0 0 32 32'
  }
}

const getPath = (name, transform) => {
  switch (name) {
    case 'sun':
      return <path d='M11.88.19a1,1,0,0,0-.88,1v2a1,1,0,0,0,2,0v-2a1,1,0,0,0-1-1ZM4,3.38a1,1,0,0,0-.81,1.16,1,1,0,0,0,.31.55L4.91,6.5a1,1,0,0,0,1.4.15,1,1,0,0,0,.15-1.41,1.06,1.06,0,0,0-.15-.15l-1.4-1.4a1,1,0,0,0-.72-.31H4Zm15.69,0a1,1,0,0,0-.6.31l-1.4,1.4a1,1,0,0,0-.15,1.41,1,1,0,0,0,1.4.15.54.54,0,0,0,.15-.15L20.5,5.09a1,1,0,0,0,0-1.41,1,1,0,0,0-.74-.3ZM12,5.19a7,7,0,1,0,7,7A7,7,0,0,0,12,5.19Zm0,2a5,5,0,1,1-5,5A5,5,0,0,1,12,7.19Zm-11.19,4a1,1,0,0,0-.9,1.09A1,1,0,0,0,1,13.19H3a1,1,0,0,0,0-2H.81Zm20,0a1,1,0,0,0-.9,1.09,1,1,0,0,0,1.09.91h2a1,1,0,0,0,0-2H20.81ZM5.47,17.59a.94.94,0,0,0-.56.32L3.5,19.28a1,1,0,1,0,1.41,1.44l1.4-1.41a1,1,0,0,0-.84-1.72Zm12.72,0a1,1,0,0,0-.81,1.17,1,1,0,0,0,.31.55l1.4,1.41a1,1,0,1,0,1.41-1.44l-1.41-1.37a1,1,0,0,0-.81-.32Zm-6.31,2.6a1,1,0,0,0-.88,1v2a1,1,0,0,0,2,0v-2a1,1,0,0,0-1-1Z' transform='translate(0.1 -0.18)'/>
    case 'cloud':
      return <path d='M22.5,11A10.51,10.51,0,0,0,12,21.5c0,.17,0,.33,0,.5h0a8,8,0,0,0,0,16H36a10,10,0,0,0,0-20,9.88,9.88,0,0,0-3.53.72A10.39,10.39,0,0,0,22.5,11Zm0,2a8.48,8.48,0,0,1,8.38,7.16l.21,1.37,1.25-.62A8,8,0,1,1,36,36H12a6,6,0,0,1,0-12,6.61,6.61,0,0,1,1,.09l1.41.22-.25-1.37A7.79,7.79,0,0,1,14,21.5,8.48,8.48,0,0,1,22.5,13Z' transform='translate(-4 -11)'/>
    case 'rain':
      return <path d='M46.34,0a1,1,0,0,0-.68.47s-.64,1-1.28,2.28a20,20,0,0,0-.91,1.94A4.59,4.59,0,0,0,43,6.5a3.5,3.5,0,0,0,7,0,4.59,4.59,0,0,0-.47-1.81c-.25-.63-.58-1.32-.9-1.94C48,1.51,47.34.47,47.34.47a1,1,0,0,0-.9-.47ZM24.91,1l-.13,0A1,1,0,0,0,24,2V6C10.72,6.47,0,15.59,0,29a1,1,0,0,0,1.72.69S5,26.31,9.09,26.31s7.72,3.41,7.72,3.41a1,1,0,0,0,1.42,0,.76.76,0,0,0,.08-.11A9.26,9.26,0,0,1,24,26.38V43.59a4.5,4.5,0,0,1-9-.09,1,1,0,0,0-1-1,.65.65,0,0,0-.24,0,1,1,0,0,0-.78,1,6.5,6.5,0,0,0,13,.16V26.38a9.26,9.26,0,0,1,5.69,3.21,1,1,0,0,0,1.39.25l.14-.12s3.51-3.41,7.69-3.41,7.34,3.38,7.34,3.38A1,1,0,0,0,50,29C50,15.59,39.28,6.47,26,6V2a1,1,0,0,0-1-1ZM3.34,2a1,1,0,0,0-.68.47S2,3.51,1.38,4.75A20,20,0,0,0,.47,6.69,4.59,4.59,0,0,0,0,8.5a3.5,3.5,0,0,0,7,0,4.59,4.59,0,0,0-.47-1.81c-.25-.63-.58-1.32-.9-1.94C5,3.51,4.34,2.47,4.34,2.47A1,1,0,0,0,3.44,2ZM46.5,3c.17.3.19.3.38.66.3.58.59,1.21.81,1.75A5.34,5.34,0,0,1,48,6.5a1.5,1.5,0,0,1-3,0,5.34,5.34,0,0,1,.31-1.06,19.29,19.29,0,0,1,.82-1.75C46.31,3.33,46.33,3.33,46.5,3ZM3.5,5c.17.3.19.3.38.66.3.58.59,1.21.81,1.75A5.34,5.34,0,0,1,5,8.5,1.44,1.44,0,0,1,3.5,10,1.44,1.44,0,0,1,2,8.5a5.34,5.34,0,0,1,.31-1.06,19.29,19.29,0,0,1,.82-1.75C3.31,5.33,3.33,5.33,3.5,5ZM25,8c12,0,21.57,7.37,22.75,18.69a11.06,11.06,0,0,0-6.84-2.38,12.52,12.52,0,0,0-8.38,3.38A9.72,9.72,0,0,0,25,24.31a9.76,9.76,0,0,0-7.56,3.41,12.87,12.87,0,0,0-8.35-3.41,11.09,11.09,0,0,0-6.84,2.41C3.42,15.38,13,8,25,8Z' transform='translate(0 0)'/>
    default:
      return <path />
  }
}

const WeatherIcons = ({
  name = "",
  style = {},
  fill = "#000",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%",
  transform = ''
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill }, transform)}
  </svg>
)

export default WeatherIcons