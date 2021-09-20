/**
 * @desc Solicitudes.
 */
class Requests {
  /**
   * @desc Constructor de la utilidad.
   *
   * @return { void }
   */
  constructor() {
    // Conjunto de cabeceras
    this.headersArray = new Headers();

    // Cabeceras
    this.headersArray.append("Accept", "application/json");
  }

  /**
   * @desc Realiza una solicitud de metodo GET
   *
   * @param { String } endpoint
   * @param { Object } data
   * @param { String } responseType
   * @param { String } token
   *
   * @return { Promise }
   */
  async get(endpoint, data = {}, responseType = "json", token = false) {
    try {
      // Validamos si tenemos credenciales.
      if (typeof token === "string") {
        // Validamos si tiene un token de autenticación.
        this.headersArray.append("Authorization", "JWT " + token);
      }

      // Indicamos el tipo de solicitud
      this.headersArray.append("Content-Type", "application/json");

      // Cabeceras.
      let headers = this.headersArray,
        method = "GET",
        params = new URLSearchParams(data).toString(),
        cache = "default";

      // Armamos el requester
      let request = new Request(endpoint + (params ? "?" + params : ""), {
        method,
        headers,
        cache,
      });

      // Almacenamos las cabeceras de la respuesta.
      let responseHeader = null;

      // Realizamos la solicitud
      let response = await fetch(request);

      // Almacenamos las cabecera de la respuesta.
      responseHeader = response.headers;

      if ([200, 400, 401, 403, 404].indexOf(response.status) > -1) {
        // Respuesta parseada
        let responseParsed = await response[responseType]();

        // Asignamos a la respuesta las cabeceras.
        responseParsed.headers = responseHeader;

        // Parseamos la respuesta.
        return responseParsed;
      }

      return {status: response.status, exceptions: response.error }
    } catch (error) {
      // Rechazamos la solicitud.
      return error;
    }
  }

}

export default Requests;
