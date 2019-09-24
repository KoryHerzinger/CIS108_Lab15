/**
 * Copyright (c), 2019. Kory William Herzinger
 */

 /**
  * Defines a service interface.
  */
export interface ServiceInterface {
    /**
     * The name of the service.
     */
    Name: string;

    /**
     * A description of the service.
     */
    Description: string;

    /**
     * Imports the service into the service framework.
     */
    Import(): void;
}
