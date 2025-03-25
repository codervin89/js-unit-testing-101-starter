import { describe, it, expect, vi } from "vitest";
import { getCityWeather } from "../src/mock";
import { getTemperture } from "../src/libs/utility";

vi.mock("../src/libs/utility")

describe('getCityWeather', () => {

  it('should return the tempeture of given city as a number', () => {
    vi.mocked(getTemperture).mockReturnValueOnce(20)

    const result = getCityWeather('London')

    expect(getTemperture).toHaveBeenCalledWith('London')
    expect(result).toBe(20)
  })
})

