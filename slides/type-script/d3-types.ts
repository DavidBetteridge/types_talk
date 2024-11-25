import { } from 'd3';

/* eslint-disable no-unused-vars */
declare module 'd3-selection' {
    interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
      attr(name: string, 
           value: (datum: any) => number | string
        ): Selection<GElement,Datum, PElement, PDatum>;
      attr(name: string, 
          value: (datum: any, index: number) => number | string
       ): Selection<GElement,Datum, PElement, PDatum>;
      attr(name: string, 
        value: d3.Line<any>
     ): Selection<GElement,Datum, PElement, PDatum>;

      on(name: string, 
          value: (event: any, datum: any) => number
       ): number;
      text(value: (datum: any) => number | string
      ): Selection<GElement,Datum, PElement, PDatum>;
    }
  }

declare module 'd3-shape' {    
    interface Line<Datum> {
      x(value: (datum: any) => number): Line<any>;
      x(value: (datum: any, index: any) => number): Line<any>;
      y(value: (datum: any) => number): Line<any>;
    }
  }

export type D3Event<T extends Event, E extends Element> = T & { currentTarget: E }

declare module 'd3' {
  interface Axis<Domain> {
      tickFormat(format: (domainValue: Domain, index: number, ticks: Domain[]) => string | null): this;
  }
}