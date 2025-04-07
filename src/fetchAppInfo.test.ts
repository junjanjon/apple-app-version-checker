jest.mock('axios');
import axios from 'axios';
import fetchAppInfo from './fetchAppInfo';


describe('fetchAppInfo', () =>
{
  it('should fetch app information successfully', async () =>
  {
    const mockCountryCode = 'jp';
    const mockAppId = '123456789';
    const mockVerbose = false;
    const mockFormat = 'json';

    // Mock console.log to capture output
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() =>
    {});

    (axios.get as any).mockResolvedValue({ data: `<html>
        <script name="schema:software-application">{"name":"Test App"}</script>
        <div class="whats-new__latest__version">バージョン 1.0.0</div>
        <time data-test-we-datetime datetime="2025-04-07"></time>
        </html>` });


    await fetchAppInfo(mockCountryCode, mockAppId, mockVerbose, mockFormat);

    expect(consoleLogSpy).toHaveBeenCalledWith(
      JSON.stringify({ appName: 'Test App', appVersion: '1.0.0', releaseDate: '2025-04-07' }),
    );

    // Restore mocked functions
    consoleLogSpy.mockRestore();
  });

  it('should handle errors gracefully', async () =>
  {
    const mockCountryCode = 'jp';
    const mockAppId = 'invalid';
    const mockVerbose = false;
    const mockFormat = 'json';

    // Mock console.error to capture error output
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() =>
    {});

    // Mock axios to simulate an error response
    (axios.get as any).mockRejectedValue(new Error('Network Error'));

    await fetchAppInfo(mockCountryCode, mockAppId, mockVerbose, mockFormat);

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching app info:', expect.any(Error));

    // Restore mocked functions
    consoleErrorSpy.mockRestore();
  });
});